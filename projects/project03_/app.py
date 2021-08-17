from flask import Flask, render_template, request, redirect, send_file, url_for, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime,date
# here we set all app configs
# aqui configuramos o app
app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://xhvtplqn:ESYFvQFVgh8m1YLRbT4MZ_c3DqrD_S5b@tuffi.db.elephantsql.com/xhvtplqn'
db = SQLAlchemy(app)
app.secret_key ="123456"
# here are all db classes
# aqui estão todas as classes de databases
class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    typepet = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    porte = db.Column(db.String(50), nullable=False)
    racao = db.Column(db.String(250), nullable=False)
    medicamento = db.Column(db.Boolean, nullable=False)
    medicamentos = db.Column(db.String(250), nullable=True)
    descricao = db.Column(db.String(250), nullable=False)
    necessidade = db.Column(db.Boolean, nullable=False)
    necessidades = db.Column(db.String(250), nullable=True)
    petowner_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    def __init__(self,name = "",typepet = "",age = 0,porte = "",racao="",medicamento=False,medicamentos="",descricao="",necessidade=False,necessidades="",petowner_id=0):
        self.name = name
        self.typepet = typepet
        self.age = age
        self.porte = porte
        
        self.racao = racao
        self.medicamento = medicamento
        self.medicamentos = medicamentos
        self.descricao = descricao
        self.necessidade = necessidade
        self.necessidades = necessidades
        self.petowner_id = petowner_id
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(50), nullable=False)
    sobrenome = db.Column(db.String(50), nullable=False)
    cpf = db.Column(db.String(12), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    endereco = db.Column(db.String(50), nullable=False)
    complemento = db.Column(db.String(50), nullable=False)
    num = db.Column(db.String(50), nullable=False)
    datanascimento = db.Column(db.Date, nullable=False)
    cep = db.Column(db.Integer, nullable=False)
    animais = db.Column(db.String(50), nullable=False)
    porte = db.Column(db.String(50), nullable=False)
    medicamento = db.Column(db.String(50), nullable=False)
    sobre = db.Column(db.String(250), nullable=False)
    hospedagem = db.Column(db.String(50), nullable=False)
    quintal = db.Column(db.String(50), nullable=False)
    valor = db.Column(db.String(50), nullable=False)
    def _init_(self,nome="",sobrenome="",cpf="",email="",passaword="",endereco="",complemento="",num="",datanascimento=datetime.now(),cep=0,animais="",porte="",medicamento="",sobre="",hospedagem="",quintal="",valor=""):
        self.nome = nome
        self.sobrenome = sobrenome
        self.cpf = cpf
        self.email = email
        self.password = passaword
        self.endereco = endereco
        self.complemento = complemento
        self.num = num
        self.datanascimento = datanascimento
        self.cep = cep
        self.animais = animais
        self.porte = porte
        self.medicamento = medicamento
        self.sobre = sobre
        self.hospedagem = hospedagem
        self.quintal = quintal
        self.valor = valor
class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstdate = db.Column(db.Date, nullable=False)
    lastdate = db.Column(db.Date, nullable=False)
    firsthour = db.Column(db.String(100), nullable=False)
    lasthour = db.Column(db.String(100), nullable=False) 
    valuehour = db.Column(db.Float, nullable=False) 
    iduser = db.Column(db.Integer, nullable=False)
    def _init_(self,firstdate=datetime.now(),lastdate=datetime.now(),firsthour="",lasthour="",valuehour=1.0,iduser=0):
        self.firstdate = firstdate
        self.lastdate = lastdate
        self.firsthour = firsthour
        self.lasthour = lasthour
        self.valuehour = valuehour
        self.iduser = iduser 
# here is the route for home
# aqui está a rota para a pagina principal
@app.route('/')
def home():
    try:
        if session['user'] == None:
            session['user'] = None
            return render_template('index.html')
        else: 
            return redirect('/perfil')
    except:
        session['user'] = None
        return render_template('index.html')

    
# here are ather page routes
# aqui estão as rotas para outras paginas
@app.route('/perfil')
def perfil():
    try:
        if session['user'] == None:
            session['user'] = None
            return render_template('index.html')
        else: 
            user = User.query.get(session['user'])
            pet = Pet.query.filter_by(petowner_id=session['user'])
            return render_template('telaperfil.html',user = user,pet = pet)
    except:
        return redirect('/')
    
@app.route('/grouppartners')
def grouppartners():
    return render_template('criadores.html')
# here are all routes to registers
# aqui estão todas as rotas para registros
@app.route('/complemento',methods=['GET','POST'])
def cadComplemento():
    if request.method == "POST":
        if request.form['SenhaConfirmacao'] == request.form['NovaSenha']:
            user = User()
            user.nome = request.form['nome']
            user.sobrenome = request.form['sobrenome']
            user.cpf = request.form['CPF']
            user.email = request.form['email']
            user.password = request.form['NovaSenha']
            user.endereco = request.form['Endereco']
            user.complemento = request.form['Complemento']
            user.num = request.form['Num']
            user.datanascimento = request.form['DataNascimento']
            user.cep = request.form['CEP']
    return render_template('cadastrocuidador.html',user=user)
@app.route('/cadastrouser')
def cadUser():
    return render_template('cadastro.html')
@app.route('/cadastropet')
def cadPet():
    return render_template('cadastropet.html')
@app.route('/cadastrotrab')
def cadTrabalho():
    return render_template('cadastroservico.html')
@app.route('/resposta')
def resposta():
    return render_template('resposta.html')
# here are all methods for all actions
# aqui estão todos os metodos para todas as ações
def select(value_table,value):
    if value == "":
        return User.query.all()
    else:
        return Pet.query.filter_by(value_table=value)    
def update():
    if db.session.commit():
        return True
    else:
        return False
def delete(value):
    db.session.delete(value)
    return db.session.commit()
def insert(value):
    db.session.add(value)
    if db.session.commit():
        return True
    else:
        return False
# here we define all methods for a specific action
# aqui definimos metodos para açoes especificas
# insert route
# rotas de inserção
@app.route('/registrousuraio/<usuario>',methods=['GET','POST'])
def insertuser(usuario):
    if request.method == "POST":
        values = usuario.split(",")
        user = User()
        user.nome = values[0]
        user.sobrenome = values[1]
        user.cpf = values[2]
        user.email = values[3]
        user.password = values[4]
        user.endereco = values[5]
        user.complemento = values[6]
        user.num = values[7]
        data = values[8].split('-')
        y = int(data[0])
        m = int(data[1])
        d = int(data[2])
        user.datanascimento = datetime(y,m,d)
        user.cep = int(values[9])
        user.animais = request.form['animais']
        user.porte = request.form['porte']
        user.medicamento = request.form['medicamento']
        user.sobre = request.form['sobre_siter']
        user.hospedagem = request.form['hospedagem']
        user.quintal = request.form['quintal']
        user.valor = request.form['valor']
        insert(user)
        user = User.query.filter_by(email=user.email)
        session['user'] = user[0].id   
    return render_template('resposta.html',message = "sucesso",location="/perfil")
@app.route('/registerpet',methods=['GET','POST'])
def insertpet():
    if request.method == "POST":
        pet = Pet()
        pet.name = request.form['nome']
        pet.typepet = request.form['animais']
        pet.age = request.form['idadepet']
        pet.porte = request.form['porte']
        pet.racao = request.form['racao']
        if request.form['medicamento'] == "sim":
            pet.medicamento = True
        else:
            pet.medicamento = False
        pet.medicamentos = request.form['qual_medicamento']
        pet.descricao = request.form['sobre_pet']
        if request.form['necessidade'] == "sim":
            pet.necessidade = True
        else:
            pet.necessidade = False
        pet.necessidades = request.form['descnecessidade']
        pet.petowner_id = session['user']
        insert(pet)
    return render_template('resposta.html',message = "pet registrado com sucesso!",location="/perfil")
@app.route('/cadastratrabalho',methods=['GET','POST'])
def insertJob():
    if request.method == "POST":
        job = Job()
        job.firstdate = request.form['data_inic']
        job.lastdate = request.form['data_fina']
        job.firsthour = request.form['horario_inic']
        job.lasthour = request.form['horario_fina']
        job.valuehour = float(request.form['valor_hora'])
        job.iduser = session['user']
        insert(job)
    return render_template('resposta.html',message = "trabalho publicado",location="/jobs")
# update route
# rotas de atualização
@app.route('/updateusuario',methods=['GET','POST'])
def updateUser():
    user = User.query.get(session['user'])
    if request.method == "POST":
        user.nome = request.form['nome']
        user.sobrenome = request.form['sobrenome']
        user.email = request.form['email']
        user.endereco = request.form['Endereco']
        user.complemento = request.form['Complemento']
        user.num = request.form['Num']
        user.datanascimento = request.form['DataNascimento']
        user.cep = int(request.form['CEP'])
        update()
    return redirect('/perfil')
@app.route('/updatepet/<idpet>')
def updatePet(idpet):
    pet = Pet.query.get(idpet)
    pet.name = request.form['nome']
    pet.typepet = request.form['animais']
    pet.age = request.form['idadepet']
    pet.porte = request.form['porte']
    pet.foto = request.form['foto']
    pet.racao = request.form['racao']
    pet.medicamento = request.form['medicamento']
    pet.medicamentos = request.form['qual_medicamento']
    pet.descricao = request.form['sobre_pet']
    pet.nescessidade = request.form['nescecidade']
    pet.nescessidades = request.form['descnecessidade']
    update()
# delete route
# rotas de remoção
@app.route('/deleteusuario')
def deleteUser():
    user = User.query.get(session['user'])
    delete(user)
    return redirect('/')
@app.route('/deletepet/<idpet>')
def deletePet(idpet):
    pet = Pet.query.get(idpet)
    delete(pet)
    return redirect('/')
@app.route('/deletejob/<idjob>')
def deletejob(idjob):
    job = Job.query.get(int(idjob))
    delete(job)
    return redirect('/jobs')
# select route
# rotas de seleção
def selectAllPet():
    pet = Pet.query.filter_by(petowner_id=session['user'])
    return pet
def selectAllJobs():
    job = Job.query.all()
    return job
def selectAllUsers():
    users = User.query.all()
    return users
# session login
# sessão de acesso
@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == "POST":
        user = User.query.all()
        for i in user:
            passs = request.form['senha']
            emailinp = request.form['email']
            if i.email == emailinp and i.password == passs:
                session['user'] = i.id 
                return redirect('/')  
            else:
                session['user'] = None 
                return redirect('/')
@app.route('/logout')
def logout():
    session['user']=None
    return redirect('/')
# show jobs
@app.route('/jobs')
def jobs():
    jobs = selectAllJobs()
    users = selectAllUsers()
    return render_template('jobs.html',jobs=jobs,users = users)
if __name__ == '__main__':  
    db.create_all()
    app.run(debug=True)