module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e21d88e065a3f8092a1468330d2b31fb'),
  },
});
