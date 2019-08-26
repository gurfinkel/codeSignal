#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub capitalizeVowelsRegExp {
    my ($input) = @_;

    $input =~ s/(a|e|i|o|u|y)/uc $1/ge;

    return $input;
}
