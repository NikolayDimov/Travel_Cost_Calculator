import { useEffect, useState } from "react";
import { Button, Container, Input, InputGroup, Label, Select, Title, TotalAmount, Wrapper } from "./App.style";

interface VehichleType {
  id: string;
  label: string;
}

interface Destination {
  id: string;
  value: string;
}

async function getVihicleTypes(): Promise<VehichleType[]> {
  return new Promise((resolve) => {
    resolve([
      { id: "1", label: "Car" },
      { id: "2", label: "Train" },
      { id: "3", label: "Bus" }
    ]);
  });
}

async function calculateTotalAmount(
  startingPoint: string,
  destinationList: Destination[],
  vehicleTypeList: VehichleType[],
  expenseName: string
): Promise<number> {
  return new Promise((resolve) => {
    console.log("Calculating total amount with:", { startingPoint, destinationList, vehicleTypeList, expenseName });
    resolve(Number((Math.random() * 1000).toFixed(2)));
  });
}

function App() {
  const [startingPoint, setStartingPoint] = useState("");
  const [destinationList, setDestinationList] = useState<Destination[]>([{ id: String(Math.random()), value: "" }]);
  const [vehicleTypeList, setVehicleTypeList] = useState<VehichleType[]>([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehichleType>();
  const [expenseName, setExpenseName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // Initial value set to 0

  const onAddDestination = () => {
    setDestinationList([...destinationList, { id: String(Math.random()), value: "" }]);
  };

  useEffect(() => {
    getVihicleTypes().then((vehicleTypes) => {
      setVehicleTypeList(vehicleTypes);
      setSelectedVehicleType(vehicleTypes[0]);
    });
  }, []);

  useEffect(() => {
    setExpenseName(`${startingPoint} - ${destinationList.map((dest) => dest.value).join(" - ")}`);
  }, [startingPoint, destinationList]);

  useEffect(() => {
    if (startingPoint && destinationList.length && vehicleTypeList.length > 0 && selectedVehicleType) {
      calculateTotalAmount(startingPoint, destinationList, vehicleTypeList, expenseName).then(setTotalAmount);
    }
  }, [startingPoint, destinationList, vehicleTypeList, expenseName, selectedVehicleType]);

  return (
    <Wrapper>
      <Container>
        <Title>Travel Cost Calculator</Title>
        <InputGroup>
          <Label htmlFor="starting_point">Starting Point</Label>
          <Input
            id="starting_point"
            placeholder="Madrid"
            name="starting_point"
            value={startingPoint}
            onChange={(e) => setStartingPoint(e.target.value)}
          />
        </InputGroup>

        {destinationList.map((destination) => {
          const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setDestinationList((prev) =>
              prev.map((dest) => (dest.id === destination.id ? { ...dest, value: e.target.value } : dest))
            );
          };
          return (
            <InputGroup key={destination.id}>
              <Label htmlFor={`dest-${destination.id}`}>Destination</Label>
              <Input
                id={`dest-${destination.id}`}
                placeholder="London"
                name={`dest-${destination.id}`}
                value={destination.value}
                onChange={onChange}
              />
            </InputGroup>
          );
        })}
        <Button onClick={onAddDestination} type="button">+ Add Destination</Button>
        <Select
          value={selectedVehicleType?.id || ""}
          onChange={(e) => {
            const selectedId = e.target.value;
            const selectedVehicle = vehicleTypeList.find((vehicle) => vehicle.id === selectedId);
            setSelectedVehicleType(selectedVehicle);
          }}
        >
          {vehicleTypeList.map((vehicleType) => (
            <option key={vehicleType.id} value={vehicleType.id}>{vehicleType.label}</option>
          ))}
        </Select>
        <InputGroup>
          <Label htmlFor="expense_name">Expense Name</Label>
          <Input id="expense_name" placeholder="" name="expense_name" value={expenseName} readOnly />
        </InputGroup>
        <TotalAmount>Total Amount: ${totalAmount}</TotalAmount>
        <Button type="submit">Submit</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
