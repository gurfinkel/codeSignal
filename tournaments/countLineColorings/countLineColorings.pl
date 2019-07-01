#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countLineColorings {
    my ($points, $colors) = @_;

    my $result = $colors;

    for (my $i = 1; $points > $i; ++$i) {
        $result *= ($colors - 1);
    }

    return $result;
}
