# Credentials

1. Server URL: http://ec2-13-58-237-215.us-east-2.compute.amazonaws.com / Webpage: http://ec2-13-58-237-215.us-east-2.compute.amazonaws.com:3000
2. SSH username: ubuntu
3. SSH key - download .pem file
4. Database URL: team3-db.cw9zowcwenob.us-east-2.rds.amazonaws.com, port: 3306
5. Database username: root
6. Database password: password
7. Database name: team3-db

## How to Log In to AWS EC2 SSH
1. Download sec4team3.pem file and store it in a secure directory.
2. Open your terminal or command line.
3. Type the following: ssh -i "/dir/sec4team3.pem" ubuntu@ec2-13-58-237-215.us-east-2.compute.amazonaws.com
3.1 Replace dir with the location of the downloaded file.
4. Press enter and you will now have access to the server terminal.

## How to Log In to AWS RDS
1. Set the endpoint to the Database URL.
2. Set the port to 3306.
3. Enter the database name in the connection name field.
4. Enter the database username and password.


(up-to-date as of 26 Feb 2021)
