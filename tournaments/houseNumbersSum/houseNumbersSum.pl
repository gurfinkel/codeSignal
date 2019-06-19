use strict;
use warnings;

sub houseNumbersSum {
    my ($inputArray) = @_;

    my $result = 0;
    my $index = 0;

    while (@$inputArray[$index]) {
        $result += @$inputArray[$index++];
    }

    return $result;
}
