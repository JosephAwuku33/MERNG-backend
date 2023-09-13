import jwt from 'jsonwebtoken';
import User from '../data/models/User.js';

export const getUser = async ( token: any) => {
    try { 
        if ( !token){
            return null;
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string};
        const user = await User.findById(decoded.id);

        return user;
    } catch ( err ) {
        console.error("Error in getUser:", err);
        return null;
    }
}