package com.doyouevenjavabro.carwell.users;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
	User findByUserId(Integer userId);
}