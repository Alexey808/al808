### Термины ###

	Классом в объектно-ориентированной разработке называют шаблон/программный код, предназначенный для создания объектов и методов.
	ООП – это наука о том, как делать правильную архитектуру. У неё есть свои принципы, например SOLID. (S=1, O=2, L=3, I=4, D=5). Ещё об ООП: Наследование, полиморфизм и инкапсуляция  — это три кита ООП.
		1) Принцип единственной обязанности (Single responsibility principle)
		класс должен иметь только одну ответственность (то есть повлиять на спецификацию класса должно быть способно только одно потенциальное изменение в спецификации ПО)
		2) Принцип открытости/закрытости (Open/closed principle)
		«программные сущности ... должны быть открыты для расширения, но закрыты для модификации.»
		3) Принцип подстановки Барбары Лисков (Liskov substitution principle)
		«объекты в программе должны быть заменяемыми на экземпляры их подтипов без изменения правильности выполнения программы.» См. также контрактное программирование.
		4) Принцип разделения интерфейса (Interface segregation principle)
		«много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения.»[9]
		5) Принцип инверсии зависимостей (Dependency inversion principle)
		«Зависимость на Абстракциях. Нет зависимости на что-то конкретное.»[9]

Внутренний интерфейс – это свойства и методы, доступ к которым может быть осуществлен только из других методов объекта, их также называют «приватными»
Внешний интерфейс – это свойства и методы, доступные снаружи объекта, их называют «публичными».

### Надо помнить ###

-Публичное и приватное свойство-
	!Локальные переменные, включая параметры конструктора, можно считать приватными свойствами.
	!Свойства, записанные в this, можно считать публичными.

!Одна из целей существования геттеров/сеттеров – как раз и есть изоляция внутренних свойств объекта, чтобы можно было их как угодно менять, генерировать «на лету», а внешний интерфейс оставался темже.



























