majors = {
  "CS": [
    ["ENG 100", "CS 100", "CS 124", "CS 128", "CS 173", "CS 210", "CS 225", "CS 233", "CS 341", "CS 361", "CS 357", "CS 374", "CS 421", "MATH 221", "MATH 231", "MATH 241", "MATH 257", "PHYS 211", "PHYS 212"],
    ["CS AE", "CS AE", "CS TE", "CS TE", "CS TE", "CS TE"]
  ],
  "CSEcon": [
    ["LAS 101", "CS 100", "CS 124", "CS 128", "CS 173", "CS 225", "CS 340", "CS 374", "CS 421", "ECON 202", "ECON 203", "ECON 302", "MATH 221", "MATH 231", "MATH 257"],
    ["CS AE", "CS AE", "CS TE", "CS TE", "CS TE", "CS TE"]
  ],
  "CSMath": [
    ["LAS 101", "CS 100", "CS 124", "CS 128", "CS 173", "CS 225", "CS 340", "CS 374", "CS 421", "MATH 221", "MATH 231", "MATH 257", "CS 450", "MATH 412", "MATH 441", "MATH 444", "MATH 414", "CS 361"],
    ["CS AE", "CS AE", "CS TE", "CS TE", "CS TE", "CS TE"]
  ],
  "CSStat": [
    ["LAS 101", "CS 100", "CS 124", "CS 128", "CS 173", "CS 225", "CS 340", "CS 374", "CS 421", "STAT 200", "STAT 400", "STAT 410", "STAT 425", "STAT 426", "STAT 428", "CS 411"],
    ["CS AE", "CS AE", "CS TE", "CS TE", "CS TE", "CS TE"]
  ],
  "Aero": [
    ["AE 100", "ENG 100", "CHEM 102", "CHEM 103", "MATH 221", "MATH 231", "MATH 241", "MATH 257", "MATH 285", "PHYS 211", "PHYS 212", "AE 140", "AE 202", "AE 311", "AE 312", "AE 321", "AE 323", "AE 352", "AE 353", "AE 370", "AE 433", "AE 442", "AE 443", "AE 460", "AE 461", "AE 483", "CS 101", "ECE 205", "ME 200", "MSE 280", "TAM 210", "TAM 212"],
    []
  ]
}

def getMajor(major):
  if major not in majors:
    return [[],[]]
  return majors[major]