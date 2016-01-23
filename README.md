GEEKSTAGRAM
-----------

> Install backend
  
    git clone https://github.com/NilinC/Geekstagram-ORT.git
    cd Geekstagram-ORT/backend/
    mvn clean install
    java -jar backend/target/econocom-ort-student-0.1.0.jar
    


---------

> URL API (Si serveur lance)

    http://37.187.178.217:8081/

----------

API Documentation
-----------------

USER
----

	

> Récupérer tous les utilisateurs

    GET: /api/users

----------

> Ajouter un utilisateur 
	> retourne l'id de l'utilisateur ou 1 en cas d'erreur

    POST: /api/users
	request :
    {
	    "name" : "Jhon Doe",
	    "email" : "email@gmail.com",
		"password" : "myPassword"
	}

----------

> Modifier un utilisateur en lui passant son identifiant {id}

    PUT: /api/users/{id}

----------

> Supprimer un utilisateur avec son ID

    DELETE: /api/users/{id}


----------

> Connecter un utilisateur, renvoie un token ou 1 en cas d'erreur

    POST: /api/users/connect
	
	request :
	{  
		"email": "email@gmail.com",  
		"password": "myPassword"
	}
    
    response : 
    48bfc191-bb01-42ec-86f6-5f1d9f14daff


----------


> Déconnecter l'utilisateur

    POST: /api/users/disconect/{id}


----------

POST
----

> Récupérer tous les POSTS

    GET: /api/posts 

----------


> Récupérer tous les POSTS d'un utilisateur

    GET: /api/posts/user/{id_user}


----------

> Récupérer un POST

    GET: /api/posts/{id}


----------

> Récupérer un POST de un Utilisateur précis

  

    GET: /api/post/user/{id}


----------


> Ajouter un POST

    POST: /api/posts


----------

> Modifier un POST

    PUT: /api/posts/{id}
    


----------

> Supprimer un POST

    DELETE: /api/posts/{id}
