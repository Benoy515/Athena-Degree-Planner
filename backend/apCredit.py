def checkCredit(aps):
  apReference = {
      "2dArt-3": ["ART 105"], "2dArt-4": ["ART 105"], "2dArt-5": ["ART 105"],
      "3dArt-3": ["ART 104"], "3dArt-4": ["ART 104"], "3dArt-5": ["ART 104"],
      "ArtHistory-3": ["ART 100"], "ArtHistory-4":["ART 100"], "ArtHistory-5": ["ART 100"],
      "Biology-3": ["IB 100"], "Biology-4": ["IB 100"], "Biology-5": ["IB 150", "MCB 150"],
      "CalculusAB-3": ["MATH 234"], "CalculusAB-4": ["MATH 221"], "CalculusAB-5": ["MATH 221"],
      "CalculusBC-3": ["MATH 220"], "CalculusBC-4": ["MATH 221", "MATH 231"], "CalculusBC-5": ["MATH 220", "MATH 231"],
      "Chemistry-3": ["CHEM 102"], "Chemistry-4": ["CHEM 102", "CHEM 104"], "Chemistry-5": ["CHEM 102", "CHEM 104"],
      "Chinese-3": ["CHIN 202"], "Chinese-4": ["CHIN 203", "CHIN 204"], "Chinese-5": ["CHIN 203", "CHIN 204", "CHIN 305", "CHIN 306"],
      "CompGov-3": ["PS 100"], "CompGov-4": ["PS 100"], "CompGov-5": ["PS 240"],
      "CompSciA-3": ["CS 105"], "CompScieA-4": ["CS 101"], "CompSciA-5": ["CS 101"],
      "CompSciPrin-3": ["CS 102"], "CompSciPrin-4": ["CS 102"], "CompSciPrin-5": ["CS 105"],
      "Drawing-3": ["ART 102"], "Drawing-4": ["ART 102"], "Drawing-5": ["ART 102"],
      "EnglishLang-3": ["RHET 101"], "EnglishLang-4": ["RHET 105"], "EnglishLang-5": ["RHET 105"],
      "EnglishLit-3": ["RHET 101"], "EnglishLit-4": ["RHET 105"], "EnglishLit-5": ["RHET 101", "RHET 105"],
      "EnvironmentalScience-3": ["NRES 100"], "EnvironmentalScience-4": ["NRES 100"], "EnvironmentalScience-5": ["NRES 100"],
      "EuropeanHistory-3": ["HIST 100"], "EuropeanHistory-4": ["HIST 100"], "EuropeanHistory-5": ["HIST 142"],
      "French-3": ["FR 103"], "French-4": ["FR 103", "FR 104", "FR 205"], "French-5": ["FR 103", "FR 104", "FR 205", "FR 207"],
      "German-3": ["GER 103", "GER 104"], "German-4": ["GER 103", "GER 104", "GER 211"], "German-5": ["GER 103", "GER 104", "GER 211"],
      "HumanGeography-3": ["GGIS 100"], "HumanGeography-4": ["GGIS 104"], "HumanGeography-5": ["GGIS 104"],
      "Italian-3": ["ITAL 102"], "Italian-4": ["ITAL 103"], "Italian-5": ["ITAL 103", "ITAL 104"],
      "Japanese-3": ["JAPN 201"], "Japanese-4": ["JAPN 203", "JAPN 204"], "Japanese-5": ["JAPN 203", "JAPN 204", "JAPN 305", "JAPN 306"],
      "Latin-3": ["LAT 201","LAT 202"], "Latin-4": ["LAT 203", "LAT 204", "LAT 101"], "Latin-5": ["LAT 203", "LAT 204", "LAT 101"],
      "Macro-5": ["ECON 103"], "Micro-5": ["ECON 102"],
      "MusicTheory-3": ["MUS 101"], "MusicTheory-4": ["MUS 101"], "MusicTheory-5": ["MUS 101"],
      "Physics1-5": ["PHYS 101"], "Physics2-5": ["PHYS 102"], "PhysicsCEM-5": ["PHYS 212"], "PhysicsCMech-5": ["PHYS 211"],
      "Pyschology-5": ["PSYC 100"],
      "Spanish-3": ["SPAN 141"], "Spanish-4": ["SPAN 141", "SPAN 200", "SPAN 204"], "Spanish-5": ["SPAN 141", "SPAN 200", "SPAN 204"],
      "SpanishLit-3": ["SPAN 141"], "SpanishLit-4": ["SPAN 141", "SPAN 200", "SPAN 204"], "SpanishLit-5": ["SPAN 141", "SPAN 200", "SPAN 204"],
      "Statistics-4": ["STAT 100"], "Statistics-5": ["STAT 100"],
      "USGov-3": ["PS 100"], "USGov-4": ["PS 101"], "USGov-5": ["PS 101"],
      "WorldHistory-5": ["HIST 100"]
  }
  earned = []
  for score in aps:
      if score in apReference:
          earned += apReference[score]
  return earned