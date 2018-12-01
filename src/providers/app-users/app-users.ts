import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Importações necessárias
import { AuthProvider } from '../../providers/auth/auth'
import { AppUsers } from '../../models/app-users'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppUsersProvider {

  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de tarefas
  private usersColllection: AngularFirestoreCollection<AppUsers>;

  // Lista de tarefas
  tasks: Observable<AppUsers[]>;

  // Parametros que vamos injetar no construtor
  constructor(private afs: AngularFirestore, private auth: AuthProvider) {
    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {
      
      // Verifica se está logado e adiciona o caminho, usaremos o email
      // como caminho para ficar mais fácil identificar as tarefas de cada usuário
      if(auth != null)
      {
        this.caminho = '/dados-' + auth.email;
        this.usersColllection = afs.collection<AppUsers>(this.caminho, ref => {
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

  pegarUser(app: boolean) {
    return this.afs
      .collection<AppUsers>(this.caminho, ref => {
        return ref.where('app', '==', app);
      })
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as AppUsers;
          //Get document id
          const id = a.payload.doc.id;
          //Use spread operator to add the id to the document data
          return { id,...data };
        })
      });
  } 

  // Método usado para adicionar uma tarefa
  adicionar(user: AppUsers) {
    this.usersColllection.add(user);
  }

  // Método usado para atualizar uma tarefa
  atualizar (id: string, task:AppUsers) {
    this.usersColllection.doc(id).update(task);
  }

  // Método usado para excluir uma tarefa
  excluir (id: string) {
    this.usersColllection.doc(id).delete();
  }

}