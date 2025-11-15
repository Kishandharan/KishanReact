let fastify = require('fastify')();
let fastifyCors = require('@fastify/cors');

fastify.register(fastifyCors, {
  origin: 'http://localhost:5173', // React app address
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed HTTP methods
});

fastify.post("/mockChatBot", function(request, reply){
    if(request.body.message == "hi"){
        return {message: "hello!"};
    }else{
        return {message: 'I dont have an answer for that!'};
    }
});


fastify.listen({port: 9000}, err => console.log(err));

