from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy data for demonstration
LEADERBOARD = [
    {"name": "Ali", "score": 350},
    {"name": "Sara", "score": 320},
    {"name": "Omar", "score": 300},
    {"name": "Lina", "score": 290},
    {"name": "You", "score": 284}
]

PLANTS = [
    {"id": 1, "name": "شجرة النخيل", "desc": "شجرة النخيل الطويلة."},
    {"id": 2, "name": "شجرة الزيتون", "desc": "شجرة الزيتون المباركة."},
    {"id": 3, "name": "فيكس ريتوسا", "desc": "شجرة فيكس ريتوسا."}
]

TREES = [
    {
        "id": 1,
        "name": "شجرة النخيل",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "description": "شجرة النخيل الطويلة.",
        "location": [120, 220],
        "quiz": {
            "question": "هل تعتقد أنها طويلة؟",
            "answers": [
                {"text": "نعم", "correct": True},
                {"text": "لا", "correct": False}
            ],
            "feedback": {
                "correct": "أحسنت! إجابة صحيحة.",
                "incorrect": "حاول مرة أخرى!"
            },
            "hint": "انظر إلى طول الشجرة في الصورة."
        }
    },
    {
        "id": 2,
        "name": "فيكس ريتوسا",
        "image": "https://images.unsplash.com/photo-1464983953574-0892a716854b",
        "description": "شجرة فيكس ريتوسا.",
        "location": [200, 300],
        "quiz": {
            "question": "ما اسم الشجرة الظاهرة في الصورة؟",
            "answers": [
                {"text": "بامبو", "correct": False},
                {"text": "فيكس ريتوسا", "correct": True},
                {"text": "دراسينا", "correct": False}
            ],
            "feedback": {
                "correct": "رائع! إجابة صحيحة.",
                "incorrect": "للأسف، إجابة خاطئة. حاول مرة أخرى!"
            },
            "hint": "الشجرة التي تبحث عنها طويلة جداً وجذورها هوائية."
        }
    }
]

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    return jsonify(LEADERBOARD)

@app.route('/api/plants', methods=['GET'])
def get_plants():
    query = request.args.get('q', '')
    results = [p for p in PLANTS if query in p['name']]
    return jsonify(results)

@app.route('/api/help', methods=['POST'])
def help_form():
    data = request.json
    # Save or process help request here
    return jsonify({"success": True, "message": "تم إرسال رسالتك بنجاح!"})

@app.route('/api/trees', methods=['GET'])
def get_trees():
    return jsonify(TREES)

@app.route('/api/tree/<int:tree_id>', methods=['GET'])
def get_tree(tree_id):
    tree = next((t for t in TREES if t["id"] == tree_id), None)
    if tree:
        return jsonify(tree)
    return jsonify({"error": "Tree not found"}), 404

@app.route('/api/quiz/<int:tree_id>', methods=['POST'])
def quiz(tree_id):
    data = request.json
    answer = data.get("answer")
    tree = next((t for t in TREES if t["id"] == tree_id), None)
    if not tree:
        return jsonify({"error": "Tree not found"}), 404
    correct = any(a["text"] == answer and a["correct"] for a in tree["quiz"]["answers"])
    feedback = tree["quiz"]["feedback"]["correct" if correct else "incorrect"]
    return jsonify({"correct": correct, "feedback": feedback, "hint": tree["quiz"].get("hint", "")})

if __name__ == '__main__':
    app.run(debug=True)