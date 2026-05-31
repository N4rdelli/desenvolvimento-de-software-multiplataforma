using api.Repositories;
using api.Settings;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

var builder = WebApplication.CreateBuilder(args);

// CONFIGURAÇÃO GLOBAL DE DATA: Força o MongoDB a ler e gravar tudo como UTC de forma segura
BsonSerializer.RegisterSerializer(typeof(DateTime), new DateTimeSerializer(DateTimeKind.Utc));

// Configra o mapeamento de configurações do MongoDB
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

// Registra o repositório no contêiner de Injeção de Dependência
builder.Services.AddSingleton<ITodoRepository, ToDoRepository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Habilita o CORS para o Front-End
builder.Services.AddCors(options =>
{
    options.AddPolicy("VueAppPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configura a pipeline de requisições HTTP, habilitando o Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("VueAppPolicy");
app.UseAuthorization();
app.MapControllers();

app.Run();