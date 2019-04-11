package com.doyouevenjavabro.carwell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

@SpringBootApplication
public class CarwellApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarwellApplication.class, args);
		System.out.println("hello I am running");
	}
	//-----------------------------
	 // Mongodb initialization parameters.
    int port_no = 33556;
    String auth_user="carwell-devuser-0002", auth_pwd = "Password1", host_name = "ds133556.mlab.com", db_name = "carwell-dev-db", db_col_name = "emp", encoded_pwd = "";

    /* Imp. Note - 
     *      1.  Developers will need to encode the 'auth_user' or the 'auth_pwd' string if it contains the <code>:</code> or the <code>@</code> symbol. If not, the code will throw the <code>java.lang.IllegalArgumentException</code>.
     *      2.  If the 'auth_user' or the 'auth_pwd' string does not contain the <code>:</code> or the <code>@</code> symbol, we can skip the encoding step.
     */
   

    // Mongodb connection string.
    String client_url = "mongodb://" + auth_user + ":" + encoded_pwd + "@" + host_name + ":" + port_no + "/" + db_name;
    MongoClientURI uri = new MongoClientURI(client_url);
    System.out.println(client_url);

    // Connecting to the mongodb server using the given client uri.
    MongoClient mongo_client = new MongoClient(uri);

    // Fetching the database from the mongodb.
    MongoDatabase db = mongo_client.getDatabase(db_name);

    
}
	
	//-----------------------------
	
	
	
	
	


