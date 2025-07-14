import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Index = () => {
  const [userServices, setUserServices] = useState([
    {
      id: 1,
      game: "Fortnite",
      title: "Быстрый донат V-Bucks",
      description: "Пополню V-Bucks за 5 минут",
      price: "₽95",
      status: "active"
    },
    {
      id: 2,
      game: "Minecraft",
      title: "Minecoins + бонус",
      description: "320 Minecoins + 50 бонусных",
      price: "₽75",
      status: "active"
    }
  ]);

  const [showAddService, setShowAddService] = useState(false);
  const [newService, setNewService] = useState({
    game: "",
    title: "",
    description: "",
    price: "",
    amount: ""
  });

  const handleAddService = () => {
    if (newService.game && newService.title && newService.price) {
      const service = {
        id: userServices.length + 1,
        ...newService,
        status: "active"
      };
      setUserServices([...userServices, service]);
      setNewService({ game: "", title: "", description: "", price: "", amount: "" });
      setShowAddService(false);
    }
  };
  const donationPackages = [
    {
      id: 1,
      game: "Fortnite",
      title: "Базовый пакет",
      amount: "1000 V-Bucks",
      price: "₽99",
      discount: null,
      popular: false
    },
    {
      id: 2,
      game: "Fortnite", 
      title: "Популярный пакет",
      amount: "2800 V-Bucks",
      price: "₽299",
      discount: "Экономия ₽78",
      popular: true
    },
    {
      id: 3,
      game: "Fortnite",
      title: "Премиум пакет", 
      amount: "5000 V-Bucks",
      price: "₽499",
      discount: "Экономия ₽196",
      popular: false
    },
    {
      id: 4,
      game: "Minecraft",
      title: "Стартовый пакет",
      amount: "320 Minecoins",
      price: "₽79",
      discount: null,
      popular: false
    },
    {
      id: 5,
      game: "Minecraft",
      title: "Расширенный пакет",
      amount: "1720 Minecoins", 
      price: "₽399",
      discount: "Экономия ₽120",
      popular: false
    },
    {
      id: 6,
      game: "Roblox",
      title: "Базовый Robux",
      amount: "400 Robux",
      price: "₽149",
      discount: null,
      popular: false
    }
  ];

  const games = [
    { name: "Fortnite", icon: "🎮", players: "350M+" },
    { name: "Minecraft", icon: "🟫", players: "140M+" },
    { name: "Roblox", icon: "🎯", players: "200M+" },
    { name: "Genshin Impact", icon: "⚔️", players: "60M+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">GhostShop01</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Игры</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Поддержка</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>ИП</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Пополняй игровую валюту быстро и безопасно
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Доступные цены, мгновенная доставка, поддержка популярных игр
          </p>
          
          <div className="flex justify-center mb-12">
            <img 
              src="/img/15b83138-1fab-4223-ac92-8688b6f373f1.jpg" 
              alt="Gaming donations"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="packages">Пакеты</TabsTrigger>
            <TabsTrigger value="games">Игры</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          {/* Donation Packages */}
          <TabsContent value="packages">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Донат-пакеты внутриигровой валюты
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donationPackages.map((pkg) => (
                  <Card key={pkg.id} className={`relative transition-all duration-300 hover:shadow-lg hover:scale-105 ${pkg.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                        Популярный
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-2">
                      <div className="text-2xl mb-2">{pkg.game === 'Fortnite' ? '🎮' : pkg.game === 'Minecraft' ? '🟫' : '🎯'}</div>
                      <CardTitle className="text-sm text-gray-500">{pkg.game}</CardTitle>
                      <CardTitle className="text-lg">{pkg.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">{pkg.amount}</div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                      {pkg.discount && (
                        <Badge variant="secondary" className="mb-4 text-green-700 bg-green-50">
                          {pkg.discount}
                        </Badge>
                      )}
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        <Icon name="CreditCard" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Games */}
          <TabsContent value="games">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Популярные игры
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {games.map((game, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="text-4xl mb-3">{game.icon}</div>
                      <h4 className="font-semibold text-lg mb-1">{game.name}</h4>
                      <p className="text-gray-500 text-sm">{game.players} игроков</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Профиль пользователя
              </h3>
              
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Profile Info */}
                <Card className="xl:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="User" size={20} className="mr-2" />
                      Информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarFallback className="text-lg">ИП</AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-lg">Игрок Pro</h4>
                      <p className="text-gray-500">player@example.com</p>
                      <Badge className="mt-2">Верифицирован</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* My Services */}
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <Icon name="Store" size={20} className="mr-2" />
                        Мои услуги
                      </CardTitle>
                      <Button 
                        onClick={() => setShowAddService(!showAddService)}
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {showAddService && (
                      <Card className="mb-4 border-dashed border-2 border-indigo-200">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-3">Создать новую услугу</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor="game">Игра</Label>
                              <Select value={newService.game} onValueChange={(value) => setNewService({...newService, game: value})}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите игру" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Fortnite">Fortnite</SelectItem>
                                  <SelectItem value="Minecraft">Minecraft</SelectItem>
                                  <SelectItem value="Roblox">Roblox</SelectItem>
                                  <SelectItem value="Genshin Impact">Genshin Impact</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="title">Название услуги</Label>
                              <Input 
                                placeholder="Быстрый донат"
                                value={newService.title}
                                onChange={(e) => setNewService({...newService, title: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="amount">Количество валюты</Label>
                              <Input 
                                placeholder="1000 V-Bucks"
                                value={newService.amount}
                                onChange={(e) => setNewService({...newService, amount: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="price">Цена</Label>
                              <Input 
                                placeholder="₽99"
                                value={newService.price}
                                onChange={(e) => setNewService({...newService, price: e.target.value})}
                              />
                            </div>
                            <div className="md:col-span-2">
                              <Label htmlFor="description">Описание</Label>
                              <Textarea 
                                placeholder="Детали вашей услуги..."
                                value={newService.description}
                                onChange={(e) => setNewService({...newService, description: e.target.value})}
                                rows={2}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button onClick={handleAddService} size="sm" className="bg-green-600 hover:bg-green-700">
                              <Icon name="Check" size={16} className="mr-2" />
                              Создать
                            </Button>
                            <Button onClick={() => setShowAddService(false)} variant="outline" size="sm">
                              Отмена
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="space-y-3">
                      {userServices.map((service) => (
                        <div key={service.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-semibold">{service.title}</p>
                              <Badge variant="outline" className="text-xs">{service.game}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{service.description}</p>
                            {service.amount && <p className="text-sm text-indigo-600 font-medium">{service.amount}</p>}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="font-bold text-lg">{service.price}</p>
                              <Badge className="bg-green-100 text-green-800 text-xs">Активна</Badge>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Icon name="MoreVertical" size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Purchase History */}
                <Card className="xl:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="History" size={20} className="mr-2" />
                      История
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-sm">2800 V-Bucks</p>
                        <p className="text-xs text-gray-500">14 июл</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-1">
                          Выполнено
                        </Badge>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-sm">1720 Minecoins</p>
                        <p className="text-xs text-gray-500">12 июл</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-1">
                          Выполнено
                        </Badge>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-sm">400 Robux</p>
                        <p className="text-xs text-gray-500">10 июл</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-1">
                          Выполнено
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">GhostShop01</h3>
              </div>
              <p className="text-gray-400">Быстро и безопасно пополняй внутриигровую валюту</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fortnite</li>
                <li>Minecraft</li>
                <li>Roblox</li>
                <li>Genshin Impact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Связаться с нами</li>
                <li>Гарантии</li>
                <li>Возврат</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@gamedonate.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GhostShop01. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;