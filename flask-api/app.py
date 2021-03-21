import flask
from flask import request
from flask import jsonify
import sys

app = flask.Flask(__name__)

app.config["DEBUG"] = True


classes = set()
clubs = set()
interests = set()

@app.route('/', methods=['GET'])
def intro():
    response  = jsonify("hi")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/setclasses', methods=['GET'])
def setclasses():
    names = request.args.get('names')
    classes.add(names)
    return jsonify(list(classes))

@app.route('/removeclasses', methods=['GET'])
def removeclasses():
    names = request.args.get('names')
    classes.remove(names)
    return jsonify(list(classes))

@app.route('/getclasses', methods=['GET'])
def getclasses():
    return jsonify(list(classes))


@app.route('/setclubs', methods=['GET'])
def setclubs():
    names = request.args.get('names')
    clubs.add(names)
    return jsonify(list(clubs))

@app.route('/removeclubs', methods=['GET'])
def removeclubs():
    names = request.args.get('names')
    clubs.remove(names)
    return jsonify(list(clubs))

@app.route('/getclubs', methods=['GET'])
def getclubs():
    return jsonify(list(clubs))

@app.route('/setinterests', methods=['GET'])
def setinterests():
    names = request.args.get('names')
    interests.add(names)
    return jsonify(list(interests))

@app.route('/removeinterests', methods=['GET'])
def removeinterests():
    names = request.args.get('names')
    interests.remove(names)
    return jsonify(list(interests))

@app.route('/getinterests', methods=['GET'])
def getinterests():
    return jsonify(list(interests))

app.run()
