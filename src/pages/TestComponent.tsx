import HexagonButton from "../components/HexagonButton.tsx";

function TestComponent() {
    return (
        <div>
            <HexagonButton type="knife" name="Morning" />
            <HexagonButton type="knife" name="Lunch" />
            <HexagonButton type="knife" name="Dinner" />
            <HexagonButton type="cup" name="Snack" />
        </div>
    );
}

export default TestComponent;