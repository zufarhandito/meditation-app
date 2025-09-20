import {
    Baby,
    BookOpen,
    CloudSun,
    Coffee,
    Folder,
    Frown,
    HeartIcon,
    MoonStar,
    Music,
    Smile,
} from "lucide-react-native";

export const categories = [
    { value: "all", label: "All", icon: Folder },
    { value: "my", label: "My", icon: HeartIcon },
    { value: "anxious", label: "Anxious", icon: Frown },
    { value: "sleep", label: "Sleep", icon: MoonStar },
    { value: "kids", label: "Kids", icon: Baby },
    { value: "happy", label: "Happy", icon: Smile },
    { value: "focus", label: "Focus", icon: Coffee },
    { value: "relax", label: "Relax", icon: CloudSun },
    { value: "stories", label: "Stories", icon: BookOpen },
    { value: "music", label: "Music", icon: Music },
];
