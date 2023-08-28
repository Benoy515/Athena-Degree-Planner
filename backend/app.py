from flask import Flask, jsonify, request
import pandas as pd

from apCredit import checkCredit 
from createPlan import createPlan, JSONifyPlan
from createCourses import getCourseList, getCourse
from majors import getMajor

names = ["Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026", "Fall 2026", "Spring 2027"]
courseList = getCourseList()

### FLASK SERVER SETUP ###

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

@app.route("/test", methods=['GET'])
def test():
    response = jsonify({'test': 'my name is Napoleon Bonaparte'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/plans", methods=['GET'])
def getPlan():
    args = request.args.to_dict()
    aps = list(args["aps"].split(",")) if "aps" in args else []
    taken = checkCredit(aps)

    required, electives = getMajor(args["major"])
    plan = createPlan(taken, required, electives, courseList)
    plan = JSONifyPlan(plan, names, courseList)
    response = jsonify({"plan": plan})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
