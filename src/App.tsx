import { Button, Container, Input, InputGroup, Label, Select, Title, TotalAmount, Wrapper } from "./App.style";

function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Travel Cost Calculator</Title>
        <InputGroup>
          <Label htmlFor="starting_point">Starting Point</Label>
          <Input id="starting_point" placeholder="Madrid" name="starting_point" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="destination_1">Destination</Label>
          <Input id="destination_1" placeholder="London" name="destination_1" />
        </InputGroup>
        <Button>+ Add Destination</Button>
        <Select>
          <option>Car</option>
          <option>Train</option>
          <option>Bus</option>
        </Select>
        <InputGroup>
          <Label htmlFor="expense_name">Expense Name</Label>
          <Input id="expense_name" placeholder="" name="expense_name" />
        </InputGroup>
        <TotalAmount>Total Amount: $456</TotalAmount>
        <Button type="submit">Submit</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
