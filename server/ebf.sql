-- Create DATABASE emergecyBathroomFinder;

CREATE TABLE users (
    user_id int generated always as identity PRIMARY KEY,
    name text
);
CREATE TABLE bathrooms (
    bathroom_id int generated always as identity PRIMARY KEY,
    name text,
    location point,
    description VARCHAR(100),
    confirmed_public bool,
    entry_key int,
    requires_key bool
);
CREATE TABLE user_bathrooms (
    user_bathroom_id int generated always as identity PRIMARY KEY,
    user_id int references users,
    bathroom_id int references bathrooms
);
CREATE TABLE features (
    feature_id int generated always as identity PRIMARY KEY,
    feature_name text
);
CREATE TABLE bathrooms_details (
    bathrooms_features_id int generated always as identity PRIMARY KEY,
    bathroom_id int references bathrooms,
    feature_id int references features
);
CREATE TABLE ratings (
    bathroom_id int references bathrooms,
    rating int,
	PRIMARY KEY (bathroom_id)
);