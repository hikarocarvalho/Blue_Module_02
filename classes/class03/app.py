from flask import Flask, render_template, request, redirect

app = Flask(__name__) 
nomes = []
last = ""
@app.route('/') 
def index(): 
    nomelista = "Lista de coisas a fazer"
    listapronta = True
    return render_template(
        'index.html',
        nomelista = nomelista,
        listapronta = listapronta,
        nomes = nomes,
        name = last
        )
    
@app.route('/new',methods=['GET', 'POST'])
def new():
    if request.method == 'POST':
        nome = request.form.get('nome')
        last = nome
        nomes.append(nome)
        return redirect('/')
    

if __name__ == '__main__':        
    app.run(debug=True)