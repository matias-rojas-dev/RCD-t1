import Container, { ContainerProps } from "./Container";

interface ErrorContainerProps extends ContainerProps {
  title: string;
}

function ErrorContainer({ title, children, ...props }: ErrorContainerProps): JSX.Element {
  return (
    <Container className="text-rose-400" {...props}>
      <span className="material-symbols-outlined text-[30px]">report</span>
      <div className="flex flex-col gap-1 text-base">
        <span>{title}</span>
        <span className="text-sm font-normal">{children}</span>
      </div>
    </Container>
  );
}

export default ErrorContainer;
