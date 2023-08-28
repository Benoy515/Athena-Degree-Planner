import pandas as pd
import re

class Course:
  def __init__(self, subject, number, name, description, hours, requirements, equivalents, prereqs, concurrents, standing) -> None:
    self.subject = subject
    self.number = str(number)
    self.name = name
    self.description = description
    self.hours = int(hours)
    self.requirements = requirements
    self.equivalents = equivalents
    self.prereqs = prereqs
    self.concurrents = concurrents
    self.standing = standing
  
  def __str__(self) -> str:
    return self.subject + " " + str(self.number)

  def getDescription(self):
    return self.description
  
  def toJSONDict(self):
    return {
      "subject": self.subject,
      "number": self.number,
      "name": self.name,
      "description": self.description,
      "hours": self.hours,
    }

class PrereqGroup:
  def __init__(self, courses) -> None:
    self.courses = courses

  def __str__(self) -> str:
    return str(self.courses)
  
  def checkComplete(self, taken):
    for arr in self.courses:
      if not any([c in taken for c in arr]):
        return False
    return True


df = pd.read_csv("course-catalog.csv").drop(columns=["Year", "Term", "YearTerm", "Type", "Type Code", "Start Time", "End Time", "Days of Week", "Room", "Building", "Instructors"])
# display(df)

def parsePrereqs(s):
  prereqs = []
  concurrents = []
  for portion in s.split(";"):
    tempArr = []
    if "One of" in portion or "one of" in portion or "or" in portion:
      for course in re.findall("[A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z][A-Z] \d\d\d", portion):
        tempArr.append(course)
      if "concurrent" in portion or "Concurrent" in portion:
        concurrents.append(tempArr)
      else:
        prereqs.append(tempArr) if tempArr else None
    else:
      for course in re.findall("[A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z][A-Z] \d\d\d", portion):
        tempArr.append([course])
      if "concurrent" in portion or "Concurrent" in portion:
        concurrents+=(tempArr)
      else:
        prereqs+=(tempArr)
  return PrereqGroup(prereqs), PrereqGroup(concurrents)

courseList = {}
# reqList = ['Cultural Studies - US Minority', 'Humanities - Hist & Phil', 'James Scholars', 'Teacher Certification', 'Social & Beh Sci - Soc Sci', 'Nat Sci & Tech - Phys Sciences', 'Humanities - Lit & Arts', 'Quantitative Reasoning I', 'Cultural Studies - Western', 'Cultural Studies - Non-West', 'Nat Sci & Tech - Life Sciences', 'Social & Beh Sci - Beh Sci', 'Quantitative Reasoning II', 'Camp Honors/Chanc Schol', 'Advanced Composition', 'Composition I']

for i in range(len(df)):
  if (df["Subject"][i] + " " + str(df["Number"][i])) in courseList:continue

  equivalents = []
  prereqs = PrereqGroup([])
  concurrents = PrereqGroup([])
  standing = ""
  requirements = [] if pd.isna(df["Degree Attributes"][i]) else [j.strip() for j in df["Degree Attributes"][i].replace(" and ", "").replace(".", "").replace(" course", "").split(",")]

  if not(pd.isna(df["Section Info"][i])):
    details = df["Section Info"][i].split("Prerequisite:")

    # Check for equivalents
    if "Same as" in details[0]:
      equivalents = re.findall("[A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z] \d\d\d|[A-Z][A-Z][A-Z][A-Z] \d\d\d", details[0])

    # Check for prereqs
    if len(details) > 1:
      prereqs, concurrents = parsePrereqs(details[1])


    # Check for standing
    for j in ["Sophomore", "Junior", "Senior", "Graduate"]:
      if j in details[-1]:
        standing = j
        break
  
  hours = 0 if pd.isna(df["Credit Hours"][i]) else min(map(int, re.findall("\d", df["Credit Hours"][i])))

  temp = Course(df["Subject"][i], df["Number"][i], df["Name"][i], df["Description"][i], hours, requirements, equivalents, prereqs, concurrents, standing)
  courseList[str(temp)] = temp

courseList["CS AE"] = Course("AE", "", "Advanced Elective", "CS Advanced Electives courses must be distinct from courses used to satisfy the technical electives. They may be chosen from CS 397 Individual Study and the 400-level coursework offered for letter grade in ANY area offered at the University of Illinois at Urbana-Champaign.", 3, [], [], PrereqGroup([]), PrereqGroup([]), "")
courseList["CS TE"] = Course("CS", "TE", "CS Technical Elective", "CS Technical Electives courses must be distinct from courses used to satisfy the advanced electives. They may be chosen from CS 397 Individual Study and the 400-level coursework offered for letter grade in ANY area offered at the University of Illinois at Urbana-Champaign.", 3, [], [], PrereqGroup([]), PrereqGroup([["CS 225"]]), "")
courseList["FE"] = Course("FE", "", "Free Elective", "Free Electives may be chosen from any course offered for letter grade at the University of Illinois at Urbana-Champaign.", 3, [], [], PrereqGroup([]), PrereqGroup([]), "")
courseList["GEE"] = Course("GEE", "", "General Education Elective", "General Education Electives may be chosen from any course offered for letter grade at the University of Illinois at Urbana-Champaign.", 3, [], [], PrereqGroup([]), PrereqGroup([]), "")

def getCourse(course):
  return courseList[course]

def getCourseList():
  return courseList

# def JSONifyPlan(p):
#   plan = p.copy()
#   for i, sem in enumerate(plan):
#     plan[i] = {"name": names[i], "courses": [courseList[c].toJSONDict() for c in sem]}
#   return plan