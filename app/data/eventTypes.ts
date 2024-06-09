interface EventType {
    key: string;
    label: string;
}

export const eventTypes: EventType[] = [
    { key: "league", label: "League Race" },
    { key: "hotlap", label: "Hotlap" },
    { key: "special", label: "Special Event" },
    { key: "community", label: "Community Event" },
    { key: "championship", label: "Championship Series" },
];

export const licenses = [
    {
        key: "R",
        label: "Rookie",
    },
    {
        key: "C",
        label: "C Class",
    },
    {
        key: "B",
        label: "B Class",
    },
    {
        key: "A",
        label: "A Class",
    },
    {
        key: "S",
        label: "Super License",
    },
]
