import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();
  const commentId = router.query.commentId;
  const todoId = router.query.todoId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <h1>Exibindo comentário número: {commentId} </h1>
      <p>do Todo: {todoId} </p>
    </>
  );
}
