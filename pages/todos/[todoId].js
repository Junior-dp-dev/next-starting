import axios from "axios";
import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  const todo = response.data;
  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
  const data = response.data;
  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>A rota é: {todo.id} </h1>
      <h3>Texto: {todo.title}</h3>
      <p>
        Comentário: la la la... <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: le le le... <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: li li li... <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
      </p>
    </>
  );
}
