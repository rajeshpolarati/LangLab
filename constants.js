export const LANGUAGES = {
  javascript: ["18.15.0"],
  typescript: ["5.0.3"],
  python: ["3.10.0"],
  java: ["15.0.2"],
  php: ["8.2.3"],
  csharp: ["6.12.0"],
};

export const CODE_SNIPPETS = {
  abap: `
  REPORT z_hello_world.
  START-OF-SELECTION.
    WRITE 'Hello, world!'.
  `,
  apex: `
  public class HelloWorld {
      public static void sayHello() {
          System.debug('Hello, World!');
      }
  }
  `,
  azcli: `
  # Azure CLI example
  az group create --name myResourceGroup --location eastus
  `,
  bat: `
  @echo off
  echo Hello, World!
  `,
  c: `
  #include <stdio.h>
  
  int main() {
      printf("Hello, World!\\n");
      return 0;
  }
  `,
  cameligo: `
  (* Cameligo example *)
  let main = (unit : unit) : string => "Hello, World!"
  `,
  clojure: `
  (ns hello-world.core)
  
  (defn -main []
    (println "Hello, World!"))
  `,
  coffee: `
  # CoffeeScript example
  console.log 'Hello, World!'
  `,
  cpp: `
  #include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }
  `,
  csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  csp: `
  Content-Security-Policy: default-src 'self'
  `,
  css: `
  body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
  }
  `,
  dockerfile: `
  # Dockerfile example
  FROM node:14
  COPY . /app
  WORKDIR /app
  RUN npm install
  CMD ["node", "app.js"]
  `,
  fsharp: `
  open System
  
  [<EntryPoint>]
  let main argv =
      printfn "Hello, World!"
      0
  `,
  go: `
  package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, World!")
  }
  `,
  graphql: `
  # GraphQL example
  query {
    hello
  }
  `,
  handlebars: `
  <!DOCTYPE html>
  <html>
  <head>
      <title>{{title}}</title>
  </head>
  <body>
      <h1>{{header}}</h1>
      <p>{{message}}</p>
  </body>
  </html>
  `,
  html: `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Hello World</title>
  </head>
  <body>
      <h1>Hello, World!</h1>
  </body>
  </html>
  `,
  ini: `
  ; INI file example
  [owner]
  name=John Doe
  organization=Acme Widgets Inc.
  `,
  java:`\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Rajesh");\n`,
  json: `
  {
    "message": "Hello, World!"
  }
  `,
  julia: `
  println("Hello, World!")
  `,
  kotlin: `
  fun main() {
      println("Hello, World!")
  }
  `,
  less: `
  @base: #f938ab;
  
  .box {
    color: @base + #111;
  }
  `,
  lexon: `
  LEXON example
  Bank of Lexon
  {
    customer: Firstname Lastname
  }
  `,
  lua: `
  print("Hello, World!")
  `,
  markdown: `
  # Hello World
  
  This is a simple markdown example.
  `,
  mips: `
  # MIPS assembly example
  .data
  hello: .asciiz "Hello, World!"
  
  .text
  main:
    li $v0, 4
    la $a0, hello
    syscall
    li $v0, 10
    syscall
  `,
  msdax: `
  EVALUATE
    FILTER (
      ADDCOLUMNS (
        SUMMARIZE ( Sales, Sales[ProductKey], Sales[OrderDate] ),
        "SalesAmount", [SalesAmount]
      ),
      [SalesAmount] > 1000
    )
  `,
  mysql: `
  -- MySQL example
  CREATE TABLE hello_world (
      id INT PRIMARY KEY,
      message VARCHAR(50)
  );
  
  INSERT INTO hello_world (id, message) VALUES (1, 'Hello, World!');
  
  SELECT message FROM hello_world;
  `,

  "objective-c": `
  #import <Foundation/Foundation.h>
  
  int main(int argc, const char * argv[]) {
      @autoreleasepool {
          NSLog(@"Hello, World!");
      }
      return 0;
  }
  `,
  pascal: `
  program HelloWorld;
  begin
    WriteLn('Hello, World!');
  end.
  `,
  pascaligo: `
  (* Pascaligo example *)
  function main(const unit : unit) : string is
    block {
      return ("Hello, World!")
    }
  `,
  perl: `
  # Perl example
  print "Hello, World!\\n";
  `,
  pgsql: `
  -- PostgreSQL example
  CREATE TABLE hello_world (
      id SERIAL PRIMARY KEY,
      message TEXT
  );
  
  INSERT INTO hello_world (message) VALUES ('Hello, World!');
  
  SELECT message FROM hello_world;
  `,
  php: "<?php\n\n$name = 'Rajesh';\necho $name;\n",
  pla: `
  # PLA example
  .i 2
  .o 2
  .ilb A B
  .ob X Y
  .p 4
  00 11
  01 10
  11 01
  10 00
  .e
  `,
  postiats: `
  #include "share/atspre_staload.hats"
  
  implement main0 () = {
    println!("Hello, World!")
    // HX: main0 is the entry point of the program
  }
  `,
  powerquery: `
  let
      Source = "Hello, World!"
  in
      Source
  `,
  powershell: `
  Write-Output "Hello, World!"
  `,
  pug: `
  doctype html
  html
    head
      title Hello World
    body
      h1 Hello, World!
  `,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Rajesh")\n`,
  r: `
  # R example
  print("Hello, World!")
  `,
  razor: `
  @page "/"
  <h1>Hello, World!</h1>
  `,
  redis: `
  # Redis example
  SET hello "Hello, World!"
  GET hello
  `,
  redshift: `
  -- Redshift example
  CREATE TABLE hello_world (
      id INT PRIMARY KEY,
      message VARCHAR(50)
  );
  
  INSERT INTO hello_world (id, message) VALUES (1, 'Hello, World!');
  
  SELECT message FROM hello_world;
  `,
  restructuredtext: `
  Hello World
  ============
  
  This is a simple reStructuredText example.
  `,
  ruby: `
  puts 'Hello, World!'
  `,
  rust: `
  fn main() {
      println!("Hello, World!");
  }
  `,
  sb: `
  # Small Basic example
  TextWindow.WriteLine("Hello, World!")
  `,
  scheme: `
  # Scheme example
  (display "Hello, World!")
  `,
  scss: `
  $base-color: #f938ab;
  
  .box {
    color: lighten($base-color, 10%);
  }
  `,
  shell: `
  #!/bin/bash
  echo "Hello, World!"
  `,
  sol: `
  pragma solidity ^0.5.0;
  
  contract HelloWorld {
      function sayHello() public pure returns (string memory) {
          return "Hello, World!";
      }
  }
  `,
  sparql: `
  # SPARQL example
  SELECT ?s WHERE {
    ?s ?p ?o
  } LIMIT 10
  `,
  sql: `
  -- SQL example
  CREATE TABLE hello_world (
      id INT PRIMARY KEY,
      message TEXT
  );
  
  INSERT INTO hello_world (message) VALUES ('Hello, World!');
  
  SELECT message FROM hello_world;
  `,
  st: `
  (* Structured Text example *)
  PROGRAM HelloWorld
      VAR
          message : STRING := 'Hello, World!';
      END_VAR
      message := 'Hello, World!';
  END_PROGRAM
  `,
  swift: `
  import Foundation
  
  print("Hello, World!")
  `,
  systemverilog: `
  module hello_world;
    initial begin
      $display("Hello, World!");
      $finish;
    end
  endmodule
  `,
  tcl: `
  puts "Hello, World!"
  `,
  twig: `
  <!DOCTYPE html>
  <html>
  <head>
      <title>{{ title }}</title>
  </head>
  <body>
      <h1>{{ message }}</h1>
  </body>
  </html>
  `,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Rajesh" });\n`,
  vb: `
  Module HelloWorld
      Sub Main()
          Console.WriteLine("Hello, World!")
      End Sub
  End Module
  `,
  xml: `
  <?xml version="1.0" encoding="UTF-8"?>
  <message>
      Hello, World!
  </message>
  `,
  yaml: `
  # YAML example
  message: "Hello, World!"
  `,
};
export const FILE_EXTENSIONS = {
    abap: ".abap",
    apex: ".cls",
    azcli: ".azcli",
    bat: ".bat",
    c: ".c",
    cameligo: ".mligo",
    clojure: ".clj",
    coffee: ".coffee",
    cpp: ".cpp",
    csharp: ".cs",
    csp: ".csp",
    css: ".css",
    dockerfile: ".dockerfile",
    fsharp: ".fs",
    go: ".go",
    graphql: ".graphql",
    handlebars: ".handlebars",
    html: ".html",
    ini: ".ini",
    java: ".java",
    javascript: ".js",
    json: ".json",
    julia: ".jl",
    kotlin: ".kt",
    less: ".less",
    lexon: ".lex",
    lua: ".lua",
    markdown: ".md",
    mips: ".s",
    msdax: ".dax",
    mysql: ".sql",
    "objective-c": ".m",
    pascal: ".pas",
    pascaligo: ".ligo",
    perl: ".pl",
    pgsql: ".sql",
    php: ".php",
    pla: ".pla",
    postiats: ".dats",
    powerquery: ".pq",
    powershell: ".ps1",
    pug: ".pug",
    python: ".py",
    r: ".r",
    razor: ".cshtml",
    redis: ".conf",
    redshift: ".sql",
    restructuredtext: ".rst",
    ruby: ".rb",
    rust: ".rs",
    sb: ".sb",
    scheme: ".scm",
    scss: ".scss",
    shell: ".sh",
    sol: ".sol",
    sparql: ".rq",
    sql: ".sql",
    st: ".st",
    swift: ".swift",
    systemverilog: ".sv",
    tcl: ".tcl",
    twig: ".twig",
    typescript: ".ts",
    vb: ".vb",
    xml: ".xml",
    yaml: ".yaml"
  }
  


export const MONACOSUPPORTEDLANGUAGES = [
  "abap",
  "apex",
  "azcli",
  "bat",
  "c",
  "cameligo",
  "clojure",
  "coffee",
  "cpp",
  "csharp",
  "csp",
  "css",
  "dockerfile",
  "fsharp",
  "go",
  "graphql",
  "handlebars",
  "html",
  "ini",
  "java",
  "javascript",
  "json",
  "julia",
  "kotlin",
  "less",
  "lexon",
  "lua",
  "markdown",
  "mips",
  "msdax",
  "mysql",
  "objective-c",
  "pascal",
  "pascaligo",
  "perl",
  "pgsql",
  "php",
  "pla",
  "postiats",
  "powerquery",
  "powershell",
  "pug",
  "python",
  "r",
  "razor",
  "redis",
  "redshift",
  "restructuredtext",
  "ruby",
  "rust",
  "sb",
  "scheme",
  "scss",
  "shell",
  "sol",
  "sparql",
  "sql",
  "st",
  "swift",
  "systemverilog",
  "tcl",
  "twig",
  "typescript",
  "vb",
  "xml",
  "yaml",
];
