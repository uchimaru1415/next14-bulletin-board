import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "@/app/types/types";

interface BBSCardProps {
  bbsData: BBSData
}

const BBSCard = ({bbsData}: BBSCardProps) => {
  const { title, content } = bbsData
  return (
    <div className="grid lg:grid-cols-3 p-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;