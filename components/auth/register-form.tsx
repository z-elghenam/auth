import { CardWrapper } from "./card-wrapper";

export const RegisterForm = () => {
  return (
    <CardWrapper
      headerLabel="Create a account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      Register form
    </CardWrapper>
  );
};
