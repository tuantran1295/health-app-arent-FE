import HexagonButton from "../components/HexagonButton.tsx";
import LinearButton from "../components/LinearButton.tsx";
import RecordCategory from "../components/RecordCategory.tsx";

function TestComponent() {
    return (
        <div>
            <HexagonButton type="knife" name="Morning"/>
            <HexagonButton type="knife" name="Lunch"/>
            <HexagonButton type="knife" name="Dinner"/>
            <HexagonButton type="cup" name="Snack"/>
            <br></br>
            <LinearButton name="記録をもっと見る"/>
            <LinearButton name="自分の日記をもっと見る"/>
            <LinearButton name="コラムをもっと見る"/>
            <br></br>
            <div className="flex pr-2">
                <RecordCategory
                    name="BODY RECORD"
                    description="自分のカラダの記録"
                    type="1"
                />
                <RecordCategory
                    name="MY EXERCISE"
                    description="自分の運動の記録"
                    type="2"
                />
                <RecordCategory name="MY DIARY" description="自分の日記" type="3"/>
            </div>
            <br></br>
        </div>
    );
}

export default TestComponent;