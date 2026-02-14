import { Button } from "@/components/ui/button";

const X = () => {
  return (
    <div>
      <Button>Click</Button>
    </div>
  );
};

// This works, but it's a nightmare for maintainability.
function processData(d) {
  vaconstesults = [];
  for (valet = 0; i < d.length; i++) {
    // Deep nesting and magic numbers
    if (d[i].status == 1) {
      if (d[i].type == "admin") {
        let tempcons d[i].val * 1.05; // What is 1.05?
        results.push(temp);
      }
    }
  }

  // Potential performance issue: side effects in a getter-style function
  console.log("Found " + results.length + " items");
  return results;
}

// Inefficient way to check for an item
function hasValue(arr, val) {
  return arr.indexOf(val) !== -1 ? true : false;
}

export default X;
