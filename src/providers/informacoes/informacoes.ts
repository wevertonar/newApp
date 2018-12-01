import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Importações necessárias
import { AuthProvider } from '../../providers/auth/auth'
import { Informacao } from '../../models/informacao'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
@Injectable()
export class InformacaoProvider {

  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de tarefas
  private denunciasColllection: AngularFirestoreCollection<Informacao>;

  // Lista de tarefas
  tasks: Observable<Informacao[]>;

  // Parametros que vamos injetar no construtor
  constructor(private afs: AngularFirestore, private auth: AuthProvider) {
    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {

      // Verifica se está logado e adiciona o caminho, usaremos o email
      // como caminho para ficar mais fácil identificar as tarefas de cada usuário
      if(auth != null)
      {
        this.caminho = '/informacoes-' + auth.email;
        this.denunciasColllection = afs.collection<Informacao>(this.caminho, ref => {
          return ref;
        });

      } else {
        this.caminho = '';
      }
    });
    //this.productsRef = this.afs.collection<Product>('productos');


  }

  // Este método será retorna um lista de tarefas pode ser
  // as finalizadas ou as que ainda não foram finalizadas
  // para filtrar passamos o parametro finalizada

  pegarDenuncias(app: boolean) {
    return this.afs
      .collection<Informacao>(this.caminho, ref => {
        return ref.where('app', '==', app);
      })
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as Informacao;
          //Get document id
          const id = a.payload.doc.id;
          //Use spread operator to add the id to the document data
          return { id,...data };
        })
      });
  }

  // Método usado para adicionar uma tarefa
  adicionar(denuncia: Informacao) {
    this.auth.user.subscribe(auth => {

      if(denuncia.tipoDenuncia == "Anônima" || denuncia.tipoDenuncia == ""){
            denuncia.idUser="";
        }else denuncia.idUser = auth.uid;

        this.denunciasColllection.add(denuncia);
   });


  }
  getFoto(image: string){
    let imgUrl: string;
    try{
      firebase.storage().ref().child(image).getDownloadURL().then(function(url){
        console.log("log1: " + url);
        imgUrl=''+url+'';
        return imgUrl;
      });
    }
    catch(e){
      console.log(e);
      return 'error';
    }
}
  // Método usado para atualizar uma tarefa
  atualizar (id: string, task:Informacao) {
    this.denunciasColllection.doc(id).update(task);
  }

  // Método usado para excluir uma tarefa
  excluir (id: string) {
    this.denunciasColllection.doc(id).delete();
  }

}
