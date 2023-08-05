from collections import defaultdict

def flatten(l):
  return [item for sublist in l for item in sublist]

def getTakeableCourses(taken, csCourses, courseList):
  takeable = []
  ranking = defaultdict(int)
  for i in range(2):
    for courseStr in csCourses:
      course = courseList[courseStr]
      if course.concurrents.checkComplete(taken + takeable) and course.prereqs.checkComplete(taken) and courseStr not in takeable:
        takeable.append(courseStr)
        # csCourses.remove(courseStr)
  for course in csCourses:
    if course not in takeable:
      for prereq in flatten(courseList[course].prereqs.courses + courseList[course].concurrents.courses):
        ranking[prereq] += 1
    if course[-3:] == "100":
      ranking[course] = 100
  for course in takeable:
    for prereq in flatten(courseList[course].prereqs.courses):# + courseList[course].concurrents.courses):
      if prereq in takeable:
        ranking[course] = 0
    # ranking[course] += (4 - courseList[course].hours)
  takeable.sort(key=lambda x: ranking[x], reverse=True)
  return takeable

def createPlan(taken, majorCourses, electives, courseList):
  taken.append("MATH 112")
  majorCourses = [i for i in majorCourses if i not in taken]
  reqsRemaining = ['Cultural Studies - US Minority', 'Humanities', 'Social', 'Natural', 'Humanities', 'Quantitative Reasoning I', 'Cultural Studies - Western', 'Cultural Studies - Non-West', 'Natural', 'Social', 'Quantitative', 'Advanced Composition']#, 'Composition I']
  for course in taken + majorCourses:
    for req in courseList[course].requirements:
      if req in reqsRemaining:
        reqsRemaining.remove(req)
      elif "Soc" in req and "Social" in reqsRemaining:
        reqsRemaining.remove("Social")
      elif "Nat" in req and "Natural" in reqsRemaining:
        reqsRemaining.remove("Natural")
      elif "Hum" in req and "Humanities" in reqsRemaining:
        reqsRemaining.remove("Humanities")
      elif "Qua" in req and "Quantitative" in reqsRemaining:
        reqsRemaining.remove("Quantitative")
  genEdCount = len(reqsRemaining)

  maxPerSem = 16
  plan = []
  credits = sum([courseList[course].hours for course in taken if course not in ["MATH 112"]])

  while credits < 120:
    # if not currentQueue and finalArr:
    #   currentQueue = finalArr.pop(0)
    currentQueue = getTakeableCourses(taken, majorCourses, courseList)
    # print(currentQueue)
    sem = []
    semCredits = 0
    # taken = []
    for course in currentQueue:
      if courseList[course].hours + semCredits <= 10:
        sem.append(course)
        semCredits += courseList[course].hours
        taken.append(course)
        majorCourses.remove(course)
      # print(sem, semCredits)
      # if semCredits >= 9:
      #   break
    currentQueue = [course for course in currentQueue if course not in taken]
    if genEdCount:
      while genEdCount and semCredits <= maxPerSem - 3:
        sem.append("GEE")
        semCredits += 3
        genEdCount -= 1
    if electives:
      while electives and semCredits <= maxPerSem - 3:
        sem.append(electives.pop(0))
        semCredits += 3
    while semCredits <= maxPerSem - 3 and credits + semCredits < 120:
      sem.append("FE")
      semCredits += 3
    # print(sem)
    credits += semCredits
    plan.append(sem)
  print(credits)
  return plan
