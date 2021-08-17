from flask import Flask, render_template, request, redirect, send_file, url_for
from flask_mail import Mail,Message
app = Flask(__name__) 
# cria dicionario para configuração de envio de mensagem
# create dict to configs for send message
mail_settings = {
    "MAIL_SERVER":'smtp.gmail.com',
    "MAIL_PORT":465,
    "MAIL_USE_TSL":False,
    "MAIL_USE_SSL":True,
    "MAIL_USERNAME":'carvportfolio@gmail.com',
    "MAIL_PASSWORD":'eec84763245'
}
app.config.update(mail_settings)
mail = Mail(app)
returnmessage = ""
# cria classe para setar configurações por mensagem
# create a class for set configs by message
class Contact:
    def __init__(self,input_name,input_email,input_message):
        self.input_name = input_name
        self.input_email = input_email
        self.input_message = input_message
# declara e importa a pagina index ou o template principal em html
# declair and import the index page or the principal html template
@app.route('/') 
def index(): 
    return render_template('index.html')
# importa pagina principal
# import home page
@app.route('/main') 
def home():
    return render_template('/maps/main.html')
# importa pagina sobre mim
# import about me page
@app.route('/aboutme')
def aboutme():
    return render_template('/maps/aboutme.html')
# importa pagina de projetos frontend
# import forntend projects page
@app.route('/frontend')
def frontend():
    return render_template('/maps/frontend.html')
# importa pagina de projetos backend
# import backend projects page
@app.route('/backend')
def backend():
    return render_template('/maps/backend.html')
# importa pagina de rodape 
# import footer page
@app.route('/footer')
def footer():
    return render_template('/maps/footer.html')
# cria função para envio de mensagem
# create function to send message
@app.route('/send',methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        contact = Contact(
        request.form['input_name'],
        request.form['input_email'],
        request.form['input_message']
        )
        msg = Message(
            subject='Hikaro',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=["hikarofcarvalho@gmail.com"],
            # message body
            # corpo da message
            body=(f'''A pessoa:
            {contact.input_name} 
            Acaba de enviar uma mensagem com o email:
            {contact.input_email}
            Onde a mensagem diz:
            {contact.input_message}
            ''')
        ) 
        mail.send(msg)   
    returnmessage="Mensagem enviada"
    return render_template('/maps/footer.html',returnmessage = returnmessage)   
    

if __name__ == '__main__':        
    app.run(debug=True)