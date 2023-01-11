export const validateUser = (schema, user) => {
  const result = schema.validate(user);

  if (!result.error) return null;
  for (let item of result.error.details) {
    
    return true;
  }
};
