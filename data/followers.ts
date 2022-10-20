type UserFollow = {
    userId: number
    followedByUserId: number
}

export const followers: UserFollow[] = [{
    userId: 1,
    followedByUserId: 2,
}, {
    userId: 1,
    followedByUserId: 3,
}, {
    userId: 2,
    followedByUserId: 1,
}, {
    userId: 2,
    followedByUserId: 3,
}]