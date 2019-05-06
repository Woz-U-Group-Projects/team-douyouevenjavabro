package com.doyouevenjavabro.carwell.users;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
	User findById(ObjectId id);
	List<User> findByRole (String role);

@Override
void delete (User deleted);
}