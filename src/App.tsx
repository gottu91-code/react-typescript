import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import type { User } from "./types/user";

const memberList = [
    {
        'id': 1,
        'name': '主田',
        'age': 24,
        'personalColor': 'blue',
    },
    {
        'id': 2,
        'name': '先岡',
        'age': 28,
        'personalColor': 'pink',
    },
    {
        'id': 3,
        'name': '後藤',
        'age': 23,
        'personalColor': 'green',
        'hobbies': ['game', 'soccer'],
    },
]

export const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    // 画面表示時にユーザー情報取得
    useEffect(() => {
        setUsers(memberList);
    }, [])

    return (
        <div>
            {users.map((user) => (
                <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} hobbies={user.hobbies} />
            ))}
        </div>
    )
}