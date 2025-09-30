import { BoxingGloveIcon } from "@phosphor-icons/react/dist/ssr/BoxingGlove";
import { Button } from "../Button";

export function Home() {
  return (
    <>
      <div className="flex items-center gap-2">
        <BoxingGloveIcon color="white" weight="bold" size={48} />
        <h1 className="text-4xl font-bold">Rumblr!</h1>
      </div>
      <div className="max-w-md text-center">
        <p className="mt-4 text-center text-sm">
          Bem-vindo ao Rumblr! Ao clicar em <b>"Cadastrar"</b>, você concorda
          com nossos{" "}
          <a href="/termos-de-servico" className="underline">
            termos de serviço
          </a>{" "}
          e{" "}
          <a href="/politica-de-privacidade" className="underline">
            política de privacidade
          </a>
          .
        </p>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Button href="/login" variant="outline">
          Login
        </Button>
        <Button href="/cadastro" variant="outline">
          Cadastrar
        </Button>
      </div>
      <div>
        <p className="text-center text-sm">
          Esqueceu sua senha?{" "}
          <a href="/esqueci-a-senha" className="text-white text-sm underline">
            Clique aqui
          </a>
        </p>
      </div>
    </>
  );
}
