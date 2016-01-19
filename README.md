GEEKSTAGRAM
-----------

API Documentation
	

> Récupérer tous les utilisateurs

    GET: /api/users

----------

> Ajouter un utilisateur 
	> retourne l'id de l'utilisateur ou 0 en cas d'erreur

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

> Connecter un utilisateur, renvoie un token ou 0 en cas d'erreur

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


    
