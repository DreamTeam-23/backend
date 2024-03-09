import jwt from "jsonwebtoken";
import User from "../models/User";
import { JwtPayload } from "jsonwebtoken";

/**
 * Decodes the JWT token and retrieves the user.
 * @param {string} token - JWT token.
 * @returns {Promise<User | null>} - The user object or null if not found.
 */
export async function getUserFromToken(token) {
    try {
        const decoded: JwtPayload = jwt.verify(token, "secret") as JwtPayload;
        const user = await User.findById(decoded.userId);
        return user;
    } catch (error) {
        console.error("Error decoding token: ", error);
        return null;
    }
}
