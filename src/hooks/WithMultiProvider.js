export const withMultiProviders = (
  providers = [],
  Container,
  containerProps = {}
) => {
  const childProvider = providers[providers.length - 1];
  let loopedProvider = childProvider(Container, containerProps);

  for (let i = providers.length - 2; i >= 0; i--) {
    loopedProvider = providers[i](loopedProvider);
  }

  return loopedProvider;
};
