import flask
from flask import request
from flask import jsonify
import sys

app = flask.Flask(__name__)

app.config["DEBUG"] = True


classes = set()


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


app.run()
