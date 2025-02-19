```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

export default async function Page({params}){
  const session = await unstable_getServerSession(req, res, authOptions);
  //rest of the code
}
```