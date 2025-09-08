import React, {useState} from "react";

const InitialHealth = 100;

const SpaceBattleSimulator = ({
    minDamage = 5,
    maxDamage = 20,
}) => {
    const InitialHealth = 100;
	const [playerHealth, setPlayerHealth] = useState(InitialHealth);
	const [enemyHealth, setEnemyHealth] = useState(InitialHealth);
	const [battleStatus, setBattleStatus] = useState("ongoing"); // "ongoing", "win", "lose", "draw"

    const getRandomDamage = () => {
        return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    }

	const handleFire = () => {
		if (battleStatus !== "ongoing") return;

		const playerDamage = getRandomDamage();
		const enemyDamage = getRandomDamage();

		const newPlayerHealth = Math.max(playerHealth - enemyDamage, 0);
		const newEnemyHealth = Math.max (enemyHealth - playerDamage, 0);

		setPlayerHealth(newPlayerHealth);
		setEnemyHealth(newEnemyHealth);

		// Determine outcome
		if (newPlayerHealth <= 0 && newEnemyHealth <= 0) {
			setBattleStatus("draw");
		} else if (newEnemyHealth <= 0) {
			setBattleStatus("win");
		} else if (newEnemyHealth >= 0) {
			setBattleStatus("lose");
		}
	};

	const handleRestart = () => {
		setPlayerHealth(InitialHealth);
		setEnemyHealth(InitialHealth);
		setBattleStatus("ongoing");
	}

    const renderStatusMessage = () => {
        switch (battleStatus) {
            case "win":
                return "Victory! You destroyed the enemy ship!";
            case "lose" : 
                return "Defeat! Your ship has been obliterated.";
            case "draw" :
                return "It's a draw! Both ships are wrecked.";
            default:
                return null;
        }
    };
	
	return (
		<div className="space-battle-simulator">
			<h1>Space Battle Simulator</h1>

			<div className="health-stats">
				<p>Player Health:</p>
				<p>Enemy Health:</p>
			</div>

			{battleStatus === "ongoing" ? (
				<button onClick ={handleFire}>Fire!</button>
			): (
				<>
					<h2>{renderStatusMessage()}</h2>
					<button onClick={handleRestart}>Restart</button>
				</>
			)}
		</div>
	);
}

export default SpaceBattleSimulator;