import { Button } from "@/components/ui/button";

const X = () => {
  return (
    <div>
      <Button>Click</Button>
    </div>
  );
};

const ADMIN_MULTIPLIER = 1.05;
function processData(d) {
  const results = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].status === 1 && d[i].type === "admin") {
      const temp = d[i].val * ADMIN_MULTIPLIER;
      results.push(temp);
    }
  }
  return results;
}

export default X;
