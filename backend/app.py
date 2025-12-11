from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

@app.route('/api/mensagem', method=['GET'])
def get_mensagem():
    return jsonify({
        'sucesso': True,
        'mensagem': 'Dados do Flask recebidos com sucesso!'
    })

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"