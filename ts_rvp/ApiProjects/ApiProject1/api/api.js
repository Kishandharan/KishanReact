let fastify = require("fastify")();
let cors = require("@fastify/cors");

fastify.register(cors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

fastify.post("/route1", async function(request, reply){
    if(request.body.message == "hello"){
        return {"response":"Hi!"};
    }else if(request.body.message == "bye"){
        return {"response":"Bye!"};
    }else{
        return;
    }
});

async function start(){
    try{await fastify.listen({port: 8000});}
    catch(err){console.log("Error", err);}
}

start();
