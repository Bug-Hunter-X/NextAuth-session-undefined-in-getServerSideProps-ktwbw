# NextAuth session undefined in getServerSideProps
This repository demonstrates a common issue encountered when using NextAuth.js with getServerSideProps: the session object is undefined.

The bug is in the file `bug.js`. The solution is provided in `bugSolution.js`.

## Bug
The original code attempts to access the session using `unstable_getServerSession` within `getServerSideProps`. This approach is incorrect because `getServerSideProps` does not have access to `req` and `res` objects. As a result, the session is undefined.